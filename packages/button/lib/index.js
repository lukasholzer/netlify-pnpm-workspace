import { jsx as _jsx } from "react/jsx-runtime";
export const Button = (props) => {
    const { children, color = 'inherit', ...rest } = props;
    return (_jsx("button", { style: { border: '1px solid red', color }, ...rest, children: children }));
};
export default Button;
//# sourceMappingURL=index.js.map