<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ __('messages.metadata.title') }}</title>
    <meta name="description" content="{{ __('messages.metadata.description') }}">

    <!--===== FAB ICON =======-->
    <link rel="shortcut icon" href="{{ asset('images/logo.jpg') }}" type="image/x-icon">

    <!--===== CSS LINK =======-->
    <link rel="stylesheet" href="{{ asset('assets/css/plugins/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/plugins/aos.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/plugins/fontawesome.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/plugins/magnific-popup.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/plugins/slick-slider.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/plugins/sidebar.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/plugins/nice-select.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/plugins/swiper-slider.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/main.css') }}">

    <style>
        .vl-header-sticky.sticky {
            background: #0F0D0D !important;
        }
        .header-lang-select {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 8px 14px;
            border-radius: 30px;
            background: rgba(255, 255, 255, 0.1);
            color: #fff;
            font-size: 14px;
            font-weight: 600;
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;
        }
        .header-lang-select:hover {
            background: rgba(232, 4, 15, 0.2);
            border-color: #E8040F;
            color: #fff;
        }
        .party-logo-img {
            height: 52px;
            width: auto;
            border-radius: 8px;
            object-fit: contain;
        }
    </style>
</head>
<body class="homepage3-body">

    <!--===== PRELOADER STARTS =======-->
    <div class="preloader">
        <div class="loading-container">
            <div class="loading"></div>
            <div id="loading-icon">
                <img src="{{ asset('images/logo.jpg') }}" alt="Prosperity Party" style="width: 44px; height: 44px; border-radius: 50%; object-fit: cover;">
            </div>
        </div>
    </div>
    <!--===== PRELOADER ENDS =======-->

    <!--===== PROGRESS STARTS =======-->
    <div class="paginacontainer">
        <div class="progress-wrap">
            <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
            </svg>
        </div>
    </div>
    <!--===== PROGRESS ENDS =======-->

    @include('components.header')

    <main>
        @yield('content')
    </main>

    @include('components.footer')

    <!--===== JS SCRIPT LINK =======-->
    <script src="{{ asset('assets/js/plugins/jquery-3-7-1.min.js') }}"></script>
    <script src="{{ asset('assets/js/plugins/bootstrap.min.js') }}"></script>
    <script src="{{ asset('assets/js/plugins/fontawesome.js') }}"></script>
    <script src="{{ asset('assets/js/plugins/aos.js') }}"></script>
    <script src="{{ asset('assets/js/plugins/counter.js') }}"></script>
    <script src="{{ asset('assets/js/plugins/magnific-popup.js') }}"></script>
    <script src="{{ asset('assets/js/plugins/nice-select.js') }}"></script>
    <script src="{{ asset('assets/js/plugins/waypoints.js') }}"></script>
    <script src="{{ asset('assets/js/plugins/sidebar.js') }}"></script>
    <script src="{{ asset('assets/js/plugins/slick-slider.js') }}"></script>
    <script src="{{ asset('assets/js/plugins/swiper-slider.js') }}"></script>
    <script src="{{ asset('assets/js/main.js') }}"></script>
</body>
</html>
