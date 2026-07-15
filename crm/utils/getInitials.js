export function getInitials(name) {
    if (!name) return '';
    return name.split(" ").map(el => el.at(0).toUpperCase()).join('');
}