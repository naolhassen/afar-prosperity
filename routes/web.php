<?php

use Illuminate\Support\Facades\Route;

$locales = ['aa', 'am', 'en'];

Route::get('/', function () {
    return redirect('/aa');
});

Route::prefix('{locale}')
    ->whereIn('locale', $locales)
    ->group(function () {
        Route::get('/', fn () => view('home'))->name('home');
        Route::get('/about/vision-mission', fn () => view('about.vision-mission'))->name('about.vision-mission');
        Route::get('/about/leadership', fn () => view('about.leadership'))->name('about.leadership');
        Route::get('/about/formation', fn () => view('about.formation'))->name('about.formation');
        Route::get('/about/structure', fn () => view('about.structure'))->name('about.structure');
        Route::get('/about/logo-meaning', fn () => view('about.logo-meaning'))->name('about.logo-meaning');
        Route::get('/briefing/news', fn () => view('briefing.news'))->name('briefing.news');
        Route::get('/briefing/articles', fn () => view('briefing.articles'))->name('briefing.articles');
        Route::get('/briefing/events', fn () => view('briefing.events'))->name('briefing.events');
        Route::get('/briefing/press-release', fn () => view('briefing.press-release'))->name('briefing.press-release');
        Route::get('/resources/manifesto', fn () => view('resources.manifesto'))->name('resources.manifesto');
        Route::get('/resources/party-program', fn () => view('resources.party-program'))->name('resources.party-program');
        Route::get('/resources/rules-of-procedure', fn () => view('resources.rules-of-procedure'))->name('resources.rules-of-procedure');
        Route::get('/contact', fn () => view('contact'))->name('contact');
    });
