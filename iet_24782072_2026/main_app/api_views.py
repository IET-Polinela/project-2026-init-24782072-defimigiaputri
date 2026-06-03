from rest_framework import (
    viewsets,
    permissions
)

from django.db.models import Q

from .models import Report

from .serializers import ReportSerializer

from .permissions import (
    IsOwnerAndDraftOrReadOnly
)

from rest_framework.pagination import (
    PageNumberPagination
)


class ReportPagination(
    PageNumberPagination
):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100


class ReportViewSet(
    viewsets.ModelViewSet
):

    serializer_class = ReportSerializer

    pagination_class = (
        ReportPagination
    )

    def get_queryset(self):

        user = self.request.user

        queryset = (
            Report.objects
            .all()
            .order_by(
                '-updated_at'
            )
        )

        tab = (
            self.request
            .query_params
            .get(
                'tab',
                None
            )
        )

        if user.is_superuser:

            return queryset.exclude(
                status='DRAFT'
            )

        if tab == 'my_reports':

            return queryset.filter(
                reporter=user
            )

        elif tab == 'feed':

            return queryset.filter(
                ~Q(
                    reporter=user
                )
                &
                ~Q(
                    status='DRAFT'
                )
            )

        return queryset.filter(

            Q(
                status__in=[
                    'REPORTED',
                    'VERIFIED',
                    'IN_PROGRESS',
                    'RESOLVED'
                ]
            )

            |

            Q(
                reporter=user,
                status='DRAFT'
            )

        )

    def get_permissions(self):

        if self.action in [
            'update',
            'partial_update',
            'destroy'
        ]:

            return [

                permissions.IsAuthenticated(),

                IsOwnerAndDraftOrReadOnly()

            ]

        return [

            permissions.IsAuthenticated()

        ]

    def perform_create(
        self,
        serializer
    ):

        serializer.save(
            reporter=self.request.user
        )