import { Link } from "react-router-dom";

const AppBanner = () => {
    return (
        <section id="appbanner">
            <div class="w-full z-50 top-0 py-3 sm:py-5 absolute">
                <div class="container flex items-center justify-between">
                    <div class="hidden lg:block">
                        <ul class="flex items-center">
                            <li class="group pl-6">
                                <Link class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white" to="/portfolio"
                                >Home
                                </Link>
                            </li>
                            <li class="group pl-6">
                            <Link class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white" to="/about"
                            >About Me
                            </Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AppBanner;