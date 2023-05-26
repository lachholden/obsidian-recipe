import { MarkdownPostProcessor, MarkdownPostProcessorContext } from 'obsidian'
import RecipePlugin from '../main'

export function tickableBulletsPostProcessor(plugin: RecipePlugin): MarkdownPostProcessor {
    return (element: HTMLElement, context: MarkdownPostProcessorContext) => {
        const bullets = element.querySelectorAll("ul li")
        bullets.forEach((bullet) => {
            plugin.registerDomEvent(bullet, "click", (e: MouseEvent) => {
                bullet.toggleClass("bullet-ticked", !bullet.hasClass("bullet-ticked"));
            });
        });
    };
}