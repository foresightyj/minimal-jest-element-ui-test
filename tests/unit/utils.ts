export function triggerMouseEvent(node: Node, eventType: string) {
    const clickEvent = document.createEvent('MouseEvents');
    clickEvent.initEvent(eventType, true, true);
    node.dispatchEvent(clickEvent);
}
