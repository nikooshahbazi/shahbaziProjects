import { ThreeDots } from "react-loader-spinner";

function Loading({ width = "75", height = "40" }) {
    return (
        <div className="items-center justify-center flex">
            <ThreeDots
                height={height}
                width={width}
                radius={9}
                color="rgb(var(--color-primary-900))"
                wrapperClass={{
                    display: "flex",
                    justifyContent: "center",
                }}
                visible={true}
            />
        </div>
    );
}

export default Loading;
