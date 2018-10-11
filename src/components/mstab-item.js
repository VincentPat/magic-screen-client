export default {
    name: 'mstabItem',
    props: {
        name: {
            type: String,
            default: '图标'
        },
        icon: {
            type: String,
            default: 'cooperation'
        },
        active: {
            type: Boolean,
            default: false
        }
    },
    render(h) {
        return h('div', {
            class: [
                'mstab__item',
                'msbutton',
                this.active ? 'active' : ''
            ]
        }, [
            h('div', {
                class: 'mstab__item__icon'
            }, [
                h('i', {
                    class: [
                        'iconfont',
                        `icon-${this.icon}`
                    ]
                }, null)
            ]),
            h('div', {
                class: [
                    'mstab__item__name'
                ]
            }, this.name)
        ]);
    }
};
