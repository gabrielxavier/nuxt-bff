import type { MenuItem } from '@/../server/types/menu'

export function useLayout() {
    const menu = useState<MenuItem[] | null>("layout-menu", () => [])
    const footer = useState<MenuItem[] | null>("layout-footer", () => [])

    const loadLayout = async () => {
        const [responseMenu, responseFooter] = await Promise.all([
            useFetch<MenuItem[]>('/api/layout/menu'),
            useFetch<MenuItem[]>('/api/layout/footer')
        ])

        menu.value = responseMenu?.data?.value ?? null
        footer.value = responseFooter?.data?.value ?? null
    }

    return { menu, footer, loadLayout }
}
