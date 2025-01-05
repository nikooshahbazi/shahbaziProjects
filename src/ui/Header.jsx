import HeaderMenu from "../component/HeaderMenu";
import UserAvatar from "../component/UserAvatar";

function Header() {
    return (
        <div>
            <div className="bg-secondary-0 py-4 px-8 border-b border-secondary-200">
                <div className="container xl:max-w-screen-lg flex items-center justify-end">
                    <HeaderMenu />
                    <UserAvatar />
                </div>
            </div>
        </div>
    );
}

export default Header;
