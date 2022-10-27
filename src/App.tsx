import React, { useCallback, useMemo, useRef, useState } from "react";

export interface UserProps {
  name: string;
  login: string;
  avatar_url: string;
}

const App: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [users, setUsers] = useState<[UserProps]>();

  const names = useMemo(
    () => users?.map((user) => user.name).join(", ") || "",
    [users]
  );

  const greeting = useCallback(
    (user: UserProps) => alert(`Hello ${user.name}`),
    []
  );

  function focusOnInput() {
    inputRef.current?.focus();
  }

  async function loadData() {
    const response = await fetch("https://api.github.com/users/Marlinsk");
    const data = await response.json();
    setUsers(data);
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      {/* <div>{users.name}</div> */}
    </div>
  );
};

export default App;
