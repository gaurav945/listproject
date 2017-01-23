from django.conf.urls import include, url
from django.conf import settings
from django.contrib import admin

urlpatterns = [
    # Examples:
    # url(r'^$', 'listproject.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^listapp/', include('listapp.urls')),
    url( r'^static/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.STATIC_ROOT }),
]
