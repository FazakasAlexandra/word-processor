import { serialize } from "../utils/serialize";
import { BaseButton } from "./editorButtons/BaseButton";

export const Preview = ({ nodes, isPreview, setPreview }) => {
    return (
        <>
            {isPreview ?
                <div
                    className="preview"
                    style={{
                        marginLeft: "3rem",
                        cursor: "default",
                        background: "#FFFFFF",
                        display: 'flex',
                        flexDirection: 'column',
                        margin: '0 auto'
                    }}
                >
                    <BaseButton
                        style={{
                            color: "#4976ED",
                            background: 'none',
                            paddingBottom: '5px',
                            marginBottom: '50px',
                            borderBottom: 'solid',
                            fontSize: '18px',
                            alignSelf: 'flex-end',
                            borderWidth: 'revert'
                        }}
                        onClick={() => setPreview(false)}
                    >
                        <img style={{width:'20px', marginRight: '5px'}}src="/toolbar-icons/back.svg"/>
                        Back
                    </BaseButton>
                    {nodes.map(value => serialize(value))}
                </div> : null}
        </>
    );
};
export default Preview;