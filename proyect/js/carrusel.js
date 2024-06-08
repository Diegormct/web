let carouselVisible = false;

        function toggleCarousel() {
            const carouselContainer = document.getElementById('carousel-container');
            carouselVisible = !carouselVisible;
            carouselContainer.style.display = carouselVisible ? 'block' : 'none';
        }

        const images = document.querySelectorAll('.carousel-image');
        images.forEach(img => {
            img.addEventListener('click', () => {
                openFullscreen(img);
            });
        });

        function openFullscreen(element) {
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.mozRequestFullScreen) { /* Firefox */
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
                document.documentElement.webkitRequestFullscreen(); // Cambio aquí
            } else if (element.msRequestFullscreen) { /* IE/Edge */
                element.msRequestFullscreen();
            }
        }