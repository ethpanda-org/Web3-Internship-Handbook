import { isLinkAbsolute, isLinkWithProtocol } from '@vuepress/helper/client';
import { useRoute, useRouter } from 'vuepress/client';
export const useNavigate = () => {
    const router = useRouter();
    const route = useRoute();
    return (url) => {
        if (url)
            if (isLinkAbsolute(url)) {
                // Inner absolute path
                if (route.fullPath !== url)
                    router.push(url);
            }
            else if (isLinkWithProtocol(url)) {
                // external url
                window.open(url);
            }
            else {
                // relative url
                router.push(encodeURI(url));
            }
    };
};
