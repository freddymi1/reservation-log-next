export const NavbarStyle = {
    navmain: "fixed w-full bg-white z-10 shadow-sm",
    subDivNav: "py-4 border-b-[1px]",
    navItem: "flex flex-row items-center justify-between gap-3 md:gap-0",
    containerNavStyle: {
        main: "max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4"
    },
    logoStyle: {
        logo: "hidden md:block cursor-pointer"
    },
    searchNavStyle: {
        search: "border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer",
        bloc1: "flex flex-row items-center justify-between",
        bloc2: "text-sm font-semibold px-6",
        bloc3: "hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center",
        addGuestsBlock: {
            main: "text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3",
            addGuests: "hidden sm:block",
            searchIcon: "p-2 bg-rose-500 rounded-full text-white"
        }
    },
    userMenu: {
        main: "relative",
        subStyle: "flex flex-row items-center gap-3",
        yourHomeText: "hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer",
        userMenuBarIcon: "p-4 md:py-2 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition",
        avatarBlock: "hidden md:block",
        menuItemsMain: "absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm transition",
        menuItems: "flex flex-col cursor-pointer",
        subMenuItems: {
            main: "px-4 py-3 hover:bg-neutral-100 transition font-semibold"
        }
    }
}

export const ModalsStyles = {
    main : "justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70",
    subMain: "relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto",
    modalsStyle: {
        contentMain: "translate duration-300 h-full",
        headerMain: "translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",
        headerModal: {
            main: "flex items-center p-6 rounded-t justify-center relative border-b-[1px]",
            subMain: "p-1 border-0 hover:opacity-70 transition absolute left-9",
            titleModal: "text-lg font-semibold"
        },
        modalBody: {
            mainBlock: "relative p-6 flex-auto"
        },
        modalFooter: {
            mainFooter: "flex flex-col gap-2 p-6",
            buttonFooterBlock: "flex flex-row items-center gap-4 w-full"
        }
    }
}

export const ButtonStyle = {
    mainBtnStyle: "relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full",
    btnIcon: "absolute left-4 top-3"

}

export const RegisterStyle = {
    main: "w-full relative",
    subMainStyle: "text-neutral-700 absolute top-5 left-2",
    headingStyle: {
        main: "flex flex-col gap-4",
        title: "text-2xl font-bold",
        subtitle: "font-light text-neutral-500 mt-2"
    },
    inputStyle: {
        label: "absolute text-md text-neutral-500 duration-150 transform -translate-y-3 top-7 z-10 origin-[0]",
        labelSuite: "peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
        inputForm: "peer w-full p-3 pt-4 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed",
    },
    haveAccount: {
        main: "text-neutral-500 text-center mt-4 font-light",
        subMain: "flex flex-row justify-center items-center gap-2",
        loginLink: "text-neutral-800 cursor-pointer hover:underline"
    }
}