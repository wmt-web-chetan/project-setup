import React, { useState, useCallback, useMemo, useEffect } from "react";
import JoditEditor from "jodit-react";

const Editor = ({isDark}) => {
  const [content, setContent] = useState("");
  const [logs, setLogs] = useState([]);

  const config = useMemo(
    () => ({
      readonly: false,
    }),
    []
  );

  

  const onChange = useCallback(
    (newContent) => {
      console.log(newContent,"hi")
    },
    []
  );

  const onBlur = useCallback(
    (newContent) => {
      setContent(newContent);
    },
    [ setContent]
  );

  useEffect(() => {
    console.log("onChange = ", onChange);
  }, [onChange]);

  return (
    <div className={`p-3 shadow-md rounded bg-white `}>
      <div className="table-box">
        <div data-testid="jodit-editor">
          <JoditEditor
            value={content}
            config={config}
            tabIndex={1}
            onBlur={onBlur}
            onChange={onChange}
          />
        </div>
        
      </div>
    </div>
  );
};

export default Editor;
