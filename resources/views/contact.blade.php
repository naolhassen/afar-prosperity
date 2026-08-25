@extends('layouts.app')

@section('content')
    <x-page-hero
        title="{{ __('messages.contact.title') }}"
        titleHighlight="{{ __('messages.contact.titleHighlight') }}"
        description="{{ __('messages.contact.description') }}"
    />

    <section class="py-16 lg:py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-3 gap-12">
                <div class="lg:col-span-1">
                    <h2 class="text-2xl font-bold text-dark mb-6">{{ __('messages.contact.info') }}</h2>
                    <div class="space-y-6">
                        <div class="flex items-start gap-4">
                            <div class="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                                <i data-lucide="mail" class="w-5 h-5 text-accent"></i>
                            </div>
                            <div>
                                <p class="text-sm text-gray">{{ __('messages.contact.emailLabel') }}</p>
                                <a href="mailto:{{ __('messages.contact.emailValue') }}" class="text-dark hover:text-accent font-medium">{{ __('messages.contact.emailValue') }}</a>
                            </div>
                        </div>
                        <div class="flex items-start gap-4">
                            <div class="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                                <i data-lucide="map-pin" class="w-5 h-5 text-accent"></i>
                            </div>
                            <div>
                                <p class="text-sm text-gray">{{ __('messages.contact.addressLabel') }}</p>
                                <p class="text-dark font-medium">{{ __('messages.contact.addressValue') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-2">
                    <form class="bg-muted rounded-2xl p-8 space-y-6" onsubmit="event.preventDefault(); alert('Message sent!');">
                        <div class="grid sm:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-sm font-medium text-dark mb-2">{{ __('messages.contact.nameLabel') }}</label>
                                <input type="text" class="w-full rounded-lg border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent" required>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-dark mb-2">{{ __('messages.contact.emailLabel') }}</label>
                                <input type="email" class="w-full rounded-lg border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent" required>
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-dark mb-2">{{ __('messages.contact.messageLabel') }}</label>
                            <textarea rows="5" class="w-full rounded-lg border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent" required></textarea>
                        </div>
                        <button type="submit" class="inline-flex items-center gap-2 px-8 py-3 bg-accent text-white font-bold rounded-lg hover:bg-accent/90 transition-colors">
                            {{ __('messages.contact.submit') }}
                            <i data-lucide="send" class="w-4 h-4"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
@endsection