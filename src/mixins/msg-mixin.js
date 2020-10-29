export default {
    methods: {
        infoMsg(text) {
            const msg = {
                text: text,
                variant: 'info',
                title: 'Information'
            }
            this.renderMsg(msg)
        },
        successMsg(text) {
            const msg = {
                text: text,
                variant: 'success',
                title: 'Success'
            }
            this.renderMsg(msg)
        },
        warningMsg(text) {
            const msg = {
                text: text,
                variant: 'warning',
                title: 'Warning'
            }
            this.renderMsg(msg)
        },
        errorMsg(text) {
            const msg = {
                text: text,
                variant: 'danger',
                title: 'Error'
            }
            this.renderMsg(msg)
        },
        renderMsg(msg) {
            this.$bvToast.toast(msg.text, {
                title: msg.title,
                variant: msg.variant,
                toaster: 'b-toaster-bottom-center mb-2',
                toastClass: `bg-${msg.variant} text-white`,
                headerClass: `bg-${msg.variant} text-white`
            })
        }
    }
}