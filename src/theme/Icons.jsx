export const StatIcon = ({ ...rest }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...rest}>
            <path
                fill="#fff"
                fillRule="evenodd"
                d="M2.9 3.9C2 4.8 2 6.2 2 9v6c0 2.8 0 4.2.9 5.1.9.9 2.3.9 5.1.9h8c2.8 0 4.2 0 5.1-.9.9-.9.9-2.3.9-5.1V9c0-2.8 0-4.2-.9-5.1C20.2 3 18.8 3 16 3H8c-2.8 0-4.2 0-5.1.9ZM16 8c.6 0 1 .4 1 1v8a1 1 0 1 1-2 0V9c0-.6.4-1 1-1Zm-7 3a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0v-6Zm4 2a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4Z"
                clipRule="evenodd"
            />
        </svg>
    );
};

export const ChatIcon = ({ ...rest }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 24 24">
            <path
                stroke="#CCD2E3"
                strokeWidth="2"
                d="M4 12a8 8 0 1 1 16 0v5l-.1 1.7a2 2 0 0 1-1.2 1.2l-1.6.1H12a8 8 0 0 1-8-8Z"
            />
            <path
                stroke="#51CBFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 11h6"
            />
            <path
                stroke="#CCD2E3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15h3"
            />
        </svg>
    );
};

export const UserIcon = ({ ...rest }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 24 24">
            <path
                stroke="#CCD2E3"
                strokeWidth="2"
                d="M17.8 20.7a5 5 0 0 0-2.1-2.7c-1.1-.6-2.4-1-3.7-1-1.3 0-2.6.4-3.7 1a5 5 0 0 0-2.1 2.7"
            />
            <circle cx="12" cy="10" r="3" stroke="#51CBFF" strokeLinecap="round" strokeWidth="2" />
            <rect width="18" height="18" x="3" y="3" stroke="#CCD2E3" strokeWidth="2" rx="3" />
        </svg>
    );
};

export const CalendarIcon = ({ ...rest }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 24 24">
            <rect width="18" height="15" x="3" y="6" stroke="#CCD2E3" strokeWidth="2" rx="2" />
            <path stroke="#CCD2E3" strokeLinecap="round" strokeWidth="2" d="M4 11h16" />
            <path stroke="#51CBFF" strokeLinecap="round" strokeWidth="2" d="M9 16h6" />
            <path stroke="#CCD2E3" strokeLinecap="round" strokeWidth="2" d="M8 3v4m8-4v4" />
        </svg>
    );
};

export const SearchIcon = ({ ...rest }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" stroke="#CCD2E3" strokeWidth="2" />
            <path stroke="#51CBFF" strokeLinecap="round" strokeWidth="2" d="M11 8a3 3 0 0 0-3 3" />
            <path stroke="#CCD2E3" strokeLinecap="round" strokeWidth="2" d="m20 20-3-3" />
        </svg>
    );
};

export const GraphIcon = ({ ...rest }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 24 24">
            <path
                stroke="#51CBFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m17 9-3 4.6a1 1 0 0 1-1.8-.1l-.4-1a1 1 0 0 0-1.8 0L7 17"
            />
            <rect width="18" height="18" x="3" y="3" stroke="#CCD2E3" strokeWidth="2" rx="2" />
        </svg>
    );
};

export const FolderIcon = ({ ...rest }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 24 24">
            <path
                stroke="#CCD2E3"
                strokeWidth="2"
                d="M3 7c0-1.9 0-2.8.6-3.4C4.2 3 5 3 7 3h10c1.9 0 2.8 0 3.4.6.6.6.6 1.5.6 3.4v10c0 1.9 0 2.8-.6 3.4-.6.6-1.5.6-3.4.6H7c-1.9 0-2.8 0-3.4-.6C3 19.8 3 19 3 17V7Z"
            />
            <path
                stroke="#CCD2E3"
                strokeWidth="2"
                d="M3 7h3c1 0 1.5 0 1.9.2.4.2.7.6 1.3 1.4l.6.8c.6.8.9 1.2 1.3 1.4.4.2 1 .2 1.9.2h5c1 0 1.4 0 1.8-.2a2 2 0 0 0 1-1c.2-.4.2-.9.2-1.8"
            />
            <path stroke="#48B4E9" strokeLinecap="round" strokeWidth="2" d="M7 16h8" />
        </svg>
    );
};

export const SettingsIcon = ({ ...rest }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 24 24">
            <path
                stroke="#CCD2E3"
                strokeWidth="2"
                d="M3 14c-.4-1-.7-1.5-.7-2s.3-1 .8-2l1.3-2.4L6 5.2c.5-.9.8-1.4 1.2-1.6.5-.3 1-.3 2.1-.3h5.6c1 0 1.6 0 2 .3.5.2.8.7 1.3 1.6l1.5 2.4 1.3 2.5c.5 1 .8 1.4.8 1.9s-.3 1-.8 2l-1.3 2.4-1.5 2.4c-.5.9-.8 1.4-1.2 1.6-.5.3-1 .3-2.1.3H9.2c-1 0-1.6 0-2-.3-.5-.2-.8-.7-1.3-1.6l-1.5-2.4-1.3-2.5Z"
            />
            <circle cx="12" cy="12" r="3" stroke="#48B4E9" strokeWidth="2" />
        </svg>
    );
};

export const ChevronRightIcon = ({ ...rest }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 16" {...rest}>
            <path fill="#445BFF" d="M7.94.94.88 8l7.06 7.06 2.12-2.12L5.12 8l4.94-4.94L7.94.94Z" />
        </svg>
    );
};
