# == Route Map
#
#                                Prefix Verb   URI Pattern                                                                              Controller#Action
#               new_api_v1_user_session GET    /api/v1/auth/sign_in(.:format)                                                           devise_token_auth/sessions#new
#                   api_v1_user_session POST   /api/v1/auth/sign_in(.:format)                                                           devise_token_auth/sessions#create
#           destroy_api_v1_user_session DELETE /api/v1/auth/sign_out(.:format)                                                          devise_token_auth/sessions#destroy
#              new_api_v1_user_password GET    /api/v1/auth/password/new(.:format)                                                      devise_token_auth/passwords#new
#             edit_api_v1_user_password GET    /api/v1/auth/password/edit(.:format)                                                     devise_token_auth/passwords#edit
#                  api_v1_user_password PATCH  /api/v1/auth/password(.:format)                                                          devise_token_auth/passwords#update
#                                       PUT    /api/v1/auth/password(.:format)                                                          devise_token_auth/passwords#update
#                                       POST   /api/v1/auth/password(.:format)                                                          devise_token_auth/passwords#create
#       cancel_api_v1_user_registration GET    /api/v1/auth/cancel(.:format)                                                            api/v1/auth/registrations#cancel
#          new_api_v1_user_registration GET    /api/v1/auth/sign_up(.:format)                                                           api/v1/auth/registrations#new
#         edit_api_v1_user_registration GET    /api/v1/auth/edit(.:format)                                                              api/v1/auth/registrations#edit
#              api_v1_user_registration PATCH  /api/v1/auth(.:format)                                                                   api/v1/auth/registrations#update
#                                       PUT    /api/v1/auth(.:format)                                                                   api/v1/auth/registrations#update
#                                       DELETE /api/v1/auth(.:format)                                                                   api/v1/auth/registrations#destroy
#                                       POST   /api/v1/auth(.:format)                                                                   api/v1/auth/registrations#create
#            api_v1_auth_validate_token GET    /api/v1/auth/validate_token(.:format)                                                    devise_token_auth/token_validations#validate_token
#                  api_v1_auth_sessions GET    /api/v1/auth/sessions(.:format)                                                          api/v1/auth/sessions#index
#         rails_postmark_inbound_emails POST   /rails/action_mailbox/postmark/inbound_emails(.:format)                                  action_mailbox/ingresses/postmark/inbound_emails#create
#            rails_relay_inbound_emails POST   /rails/action_mailbox/relay/inbound_emails(.:format)                                     action_mailbox/ingresses/relay/inbound_emails#create
#         rails_sendgrid_inbound_emails POST   /rails/action_mailbox/sendgrid/inbound_emails(.:format)                                  action_mailbox/ingresses/sendgrid/inbound_emails#create
#   rails_mandrill_inbound_health_check GET    /rails/action_mailbox/mandrill/inbound_emails(.:format)                                  action_mailbox/ingresses/mandrill/inbound_emails#health_check
#         rails_mandrill_inbound_emails POST   /rails/action_mailbox/mandrill/inbound_emails(.:format)                                  action_mailbox/ingresses/mandrill/inbound_emails#create
#          rails_mailgun_inbound_emails POST   /rails/action_mailbox/mailgun/inbound_emails/mime(.:format)                              action_mailbox/ingresses/mailgun/inbound_emails#create
#        rails_conductor_inbound_emails GET    /rails/conductor/action_mailbox/inbound_emails(.:format)                                 rails/conductor/action_mailbox/inbound_emails#index
#                                       POST   /rails/conductor/action_mailbox/inbound_emails(.:format)                                 rails/conductor/action_mailbox/inbound_emails#create
#         rails_conductor_inbound_email GET    /rails/conductor/action_mailbox/inbound_emails/:id(.:format)                             rails/conductor/action_mailbox/inbound_emails#show
#                                       PATCH  /rails/conductor/action_mailbox/inbound_emails/:id(.:format)                             rails/conductor/action_mailbox/inbound_emails#update
#                                       PUT    /rails/conductor/action_mailbox/inbound_emails/:id(.:format)                             rails/conductor/action_mailbox/inbound_emails#update
#                                       DELETE /rails/conductor/action_mailbox/inbound_emails/:id(.:format)                             rails/conductor/action_mailbox/inbound_emails#destroy
# rails_conductor_inbound_email_reroute POST   /rails/conductor/action_mailbox/:inbound_email_id/reroute(.:format)                      rails/conductor/action_mailbox/reroutes#create
#                    rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
#             rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#                    rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
#             update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#                  rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  post "/graphql", to: "graphql#execute"
  namespace :api do
    namespace :v1 do

      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        registrations: 'api/v1/auth/registrations'
      }

      namespace :auth do
        resources :sessions, only: %i[index]
      end
    end
  end
end
