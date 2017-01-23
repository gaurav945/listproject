from django.conf.urls import url, include
from django.contrib import admin
from . import views

urlpatterns = [
    # url(r'^admin/', admin.site.urls),
	url(r'^$', views.main_page, name='main_page'),
	url(r'^add_item_to_list/$', views.add_item_to_list, name='add_item_to_list'),
	url(r'^erase_item_from_list/$', views.erase_item_from_list, name='erase_item_from_list'),
]