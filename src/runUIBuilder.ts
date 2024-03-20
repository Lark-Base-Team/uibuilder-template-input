//@ts-nocheck
export default async function main(uiBuilder) {
    uiBuilder.form((form) => ({
        formItems: [
            form.input('text', { label: '基本使用', placeholder: 'Basic usage' }),
            form.input('text2', { label: '设置默认值', defaultValue: '文本默认值' }),
        ],
        buttons: ['确定', '取消'],
    }), async ({ values }) => {
        const { text, text2 } = values;
    });
}