import React, { useState } from 'react';

function Check () {
    const [checked, setChecked] = useState(true);

    let message;
    if (checked) {
        message = "выбран";
    } else {
        message = "не выбран";
    }

    return (
        <div className="box">
            <div className="text">Чекбокс {message}</div>
            <label>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                />
            </label>
        </div>
    );
}

export default Check;
