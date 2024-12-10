const particlesConfig = {
    fullScreen: {
        enable: false, // Fullscreen devre dışı
    },
    particles: {
        number: {
            value: 130,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: "#000000", // Partikül rengi siyah
        },
        shape: {
            type: "circle", // Daire şeklindeki partiküller
        },
        opacity: {
            value: 0.5,
            random: true,
        },
        size: {
            value: 4,
            random: true,
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#000000", // Çizgi rengi siyah
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            out_mode: "out",
            bounce: false, // Sekme efekti devre dışı
        },
    },
    interactivity: {
        detect_on: "window", // Etkileşim sadece canvas ile sınırlı
        events: {
            onhover: {
                enable: true,
                mode: "grab", // Mouse üzerindeyken çizgiler yakalanır
            },
            onclick: {
                enable: true,
                mode: "push", // Mouse tıklandığında yeni partiküller eklenir
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 150,
                line_linked: {
                    opacity: 1,
                },
            },
            push: {
                particles_nb: 4,
            },
        },
    },
    retina_detect: true,
};

export default particlesConfig;
