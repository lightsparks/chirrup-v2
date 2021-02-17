export default {
    required: (value: string) => !!value || 'Required.',
    minChars: (amount: number) => (value: string) => (value || '').length >= amount || `Min ${amount} characters`,
    maxChars: (amount: number) => (value: string) => (value || '').length <= amount || `Max ${amount} characters`,
    email: (value: string) => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) || 'Invalid e-mail.',
}