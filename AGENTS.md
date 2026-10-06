<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application architecture
- Keep AuraNest content in browser-safe static data and shared presentation components; this makes the demo fully functional without backend services.
- Use individual TanStack content routes with leaf metadata and a root shared header/footer so each page can be linked and shared.
- Import generated interior photography from project assets and keep all visual roles in the global semantic design system for consistent styling.
