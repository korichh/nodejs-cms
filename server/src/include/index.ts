import path from "path"

export function escapeHTML(html: string): string {
    return html
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
} 

export function isJSON(str: string, type: string): boolean {
    try {
        const value = JSON.parse(str)
        switch (type) {
            case "array":
                if (!Array.isArray(value)) throw new Error()
                break
            case "object":
                if (typeof value !== "object" || value === null || Array.isArray(value)) throw new Error()
                break
        }
    } catch (e) {
        return false
    }
    return true
}

export function capital(text: string): string {
    return text[0].toUpperCase() + text.slice(1)
}

export function getImageSrc(entity: any, size: string = ""): string {
    if (!entity.entity_image) return "#"
    switch (size) {
        case "sm":
            let { name, ext } = path.parse(entity.entity_image)
            entity.entity_image = `${name}-${size}${ext}`
            break
    }
    return `img/entity-type/${entity.entity_type_name}/${entity.entity_image}`
}