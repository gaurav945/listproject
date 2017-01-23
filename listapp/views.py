from .models import ListItem
from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render_to_response
from django.views.decorators.csrf import ensure_csrf_cookie

# Create your views here.

def main_page(request):
	context = {}
	for i in range(0, len(ListItem.objects.all())):
		context[ListItem.objects.all()[i].id] = ListItem.objects.all()[i].content
	return render_to_response('listapp/main_page.html', {'context' : context})

@ensure_csrf_cookie
def add_item_to_list(request):
	data = request.POST.get('list_item')
	temp = ListItem(content=data)
	temp.save()
	id_ = temp.id
	# import ipdb; ipdb.set_trace()
	return HttpResponse(id_)

@ensure_csrf_cookie
def erase_item_from_list(request):
	id_ = int(request.POST.get('list_item_id'))
	item = ListItem.objects.get(id=id_)
	item.delete()
	# import ipdb; ipdb.set_trace()
	return HttpResponse('This item has very successfully been erased !!')