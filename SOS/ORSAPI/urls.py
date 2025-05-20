from django.urls import path
from . import views

urlpatterns = [
    path('signup/', views.user_signup),
    path('login/', views.user_signin),
    path('search/<int:pageNo>/', views.user_list),
    path('get/<int:id>/', views.get_user),
    path('save/', views.save_user),
    path('delete/<int:id>/', views.delete_user),
    path('token/', views.generate_token),
    path('validate/', views.validate_token),
]