export interface INavItemLink {
    name: string;
    icon: string;
    href?: string;
    desc?: string;
    disabled?: boolean;
    children?: {
        name: string;
        desc: string;
        href: string;
    }[];
}

export interface INavItem {
    name: string;
    img: string;
    children: INavItemLink[][];
}

export const headerNavigation: INavItem[] = [
    {
        name: "Alethia",
        img: "/media/menu-alethia.mp4",
        children: [
            [
                {
                    name: "About",
                    href: "/alethia",
                    icon: "/img/header/about.svg",
                },
                {
                    name: "Apps",
                    href: "https://taiko.xyz/ecosystem",
                    icon: "/img/header/apps.svg",
                },
                {
                    name: "Docs",
                    href: "https://docs.taiko.xyz/start-here/getting-started",
                    icon: "/img/header/docs.svg",
                },
            ],
            [
                {
                    name: "Block explorers",
                    icon: "/img/header/explorers.svg",
                    children: [
                        {
                            name: "Taikoscan.io",
                            desc: "By Etherscan",
                            href: "https://taikoscan.io/",
                        },
                        {
                            name: "Taikoexplorer.com/",
                            desc: "By Routescan",
                            href: "https://taikoscan.network/",
                        },
                        {
                            name: "Taikoscan.net",
                            desc: "By Socialscan",
                            href: "https://taikoscan.net/",
                        },
                    ],
                },
            ],
        ],
    },
    {
        name: "Gwyneth",
        img: "/media/menu-gwyneth.mp4",
        children: [
            [
                {
                    name: "About",
                    href: "/gwyneth",
                    icon: "/img/header/about.svg",
                },
                {
                    name: "Apps",
                    href: "",
                    icon: "/img/header/apps.svg",
                    disabled: true,
                },
                {
                    name: "Docs",
                    href: "https://docs.taiko.xyz/start-here/getting-started",
                    icon: "/img/header/docs.svg",
                },
                {
                    name: "Block explorers",
                    icon: "/img/header/explorers.svg",
                    href: "",
                },
            ],
        ],
    },
    {
        name: "Governance",
        img: "/media/menu-governance.mp4",
        children: [
            [
                {
                    name: "Learn",
                    href: "https://taiko.mirror.xyz/9lW3JdFnMJGtoPbmXqFS32XNxf_iK0VDx0vGWk2K7Eo",
                    icon: "/img/header/learn.svg",
                },
                {
                    name: "Aragon",
                    href: "https://hekla.dao.taiko.xyz/",
                    icon: "/img/header/aragon.svg",
                },
            ],
        ],
    },
    {
        name: "Learn",
        img: "/media/menu-learn.mp4",
        children: [
            [
                {
                    name: "About",
                    href: "/about",
                    icon: "/img/header/about.svg",
                },
                {
                    name: "Blog",
                    href: "/blog",
                    icon: "/img/header/blog.svg",
                },
                {
                    name: "Brand Kit",
                    href: "/brand-assets",
                    icon: "/img/header/brand-kit.svg",
                },
                {
                    name: "Careers",
                    href: "/careers",
                    icon: "/img/header/careers.svg",
                },
            ],
        ],
    },
    {
        name: "Engage",
        img: "/img/header/taiko-engage.jpg",
        children: [
            [
                {
                    name: "Trailblazer",
                    href: "https://trailblazers.taiko.xyz/",
                    icon: "/img/header/trailblazer.svg",
                },
                {
                    name: "Snaefell NFT",
                    href: "https://snaefellnft.taiko.xyz/",
                    icon: "/img/header/snaefell.svg",
                },
                {
                    name: "Taikoons NFT",
                    href: "https://taikoons.taiko.xyz/",
                    icon: "/img/header/taikoons.svg",
                },
            ],
        ],
    },
];

export const getOneLevelLinks = (group = false) => {
    return headerNavigation
        .map((item) => ({
            name: item.name,
            links: item.children.flat(),
        }))
        .map((item) => {
            const links: INavItemLink[] = [];

            if(group) {

                links.push(...item.links);

            } else {

                for (const { children, ...child } of item.links) {
                    if (children) {
                        links.push(...(children as any));
                    } else {
                        links.push(child);
                    }
                }

            }

            return {
                name: item.name,
                links,
            };
        });
};
