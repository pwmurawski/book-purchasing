import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface IMsg {
  success?: string;
  error?: string;
}

interface ILocationState {
  state?: {
    msg?: IMsg;
  };
}

const useLocationMessage = () => {
  const [msg, setMsg] = useState<IMsg>({});
  const { state } = useLocation() as ILocationState;

  useEffect(() => {
    const successMsg = state?.msg?.success;
    const errorMsg = state?.msg?.error;
    let timeOut: NodeJS.Timeout | undefined;

    if (successMsg || errorMsg || (successMsg && errorMsg)) {
      setMsg({ success: successMsg, error: errorMsg });
      timeOut = setTimeout(() => {
        setMsg({});
      }, 3000);
    }

    return () => {
      clearTimeout(timeOut);
    };
  }, [state?.msg]);

  return msg;
};

export default useLocationMessage;
