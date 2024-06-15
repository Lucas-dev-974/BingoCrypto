interface InputTextProps {
  placeholder?: string;
  onInput: (e: InputEvent & { target: HTMLInputElement }) => void;
  password?: boolean;
  dark?: boolean;
}

export function InputText(props: InputTextProps) {
  return (
    <input
      type={props.password ? "password" : "text"}
      class="w-full p-2 border border-gray-300 rounded mt-1"
      placeholder={props.placeholder}
      onInput={(event) => props.onInput(event)}
    />
  );
}
