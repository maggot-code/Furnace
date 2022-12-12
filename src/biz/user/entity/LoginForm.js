/*
 * @FilePath: \Furnace\src\biz\user\entity\LoginForm.js
 * @Author: maggot-code
 * @Date: 2022-12-04 04:06:48
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-12 10:28:13
 * @Description: 
 */
export function LoginFormEntity() {
    const data = reactive({
        username: "admin",
        userpassword: "admin@1234"
    });
    const rules = {
        username: [
            {
                required: true,
                message: "请输入用户名",
                trigger: "change"
            },
            {
                min: 4,
                max: 16,
                message: "用户名长度在 4 到 16 个字符",
                trigger: "blur"
            }
        ],
        userpassword: [
            {
                required: true,
                message: "请输入密码",
                trigger: "change"
            },
            {
                min: 6,
                max: 16,
                message: "密码长度在 6 到 16 个字符",
                trigger: "blur"
            }
        ]
    };

    return {
        data,
        rules
    }
}

export default LoginFormEntity;
