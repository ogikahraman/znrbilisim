const particlesConfig = {
    fullScreen: {
        enable: false,
    },
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: "#ffffff",
        },
        shape: {
            type: "circle",
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
            color: "#00ccff",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            out_mode: "out",
            bounce: false,
        },
    },
    interactivity: {
        detect_on: "window",
        events: {
            onhover: {
                enable: true,
                mode: "grab",
            },
            onclick: {
                enable: true,
                mode: "push",
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
