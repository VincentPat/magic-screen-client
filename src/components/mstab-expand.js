export default {
    name: 'mstabExpand',
    render(h) {
        return h('div', {
            class: [
                'mstab__expand',
                'msbutton'
            ]
        }, [
            h('i', {
                class: [
                    'iconfont',
                    'icon-up'
                ]
            }, null)
        ]);
    }
};
