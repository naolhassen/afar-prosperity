@props([
    'title',
    'titleHighlight' => '',
    'description' => null,
])

<section class="bg-gradient-to-br from-dark via-dark-light to-dark py-20 lg:py-28 relative overflow-hidden">
    <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 left-0 w-72 h-72 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div class="absolute bottom-0 right-0 w-72 h-72 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
    </div>
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {{ $title }} <span class="text-accent">{{ $titleHighlight }}</span>
        </h1>
        @if ($description)
            <p class="text-lg text-gray-light max-w-2xl mx-auto">{{ $description }}</p>
        @endif
    </div>
</section>
