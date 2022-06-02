import Button from "./style";

function Primary({ type, children }) {
  return (
    <Button type={type}>{children}</Button>
  );
}

export default Primary;
