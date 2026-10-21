# native-image-modals

A minimal **React Native** image‑modal gallery built with **Expo** and **pnpm**.

## Features

- Reusable `ImageModal` component for full‑screen image display.
- `ImageList` component using a `FlatList` (grid) – DRY and KISS.
- `ImageGalleryScreen` combines a `ScrollView`, the list and the modal.
- TypeScript for strong typing, no extra UI libraries (keeps bundle size low).

## Getting Started

```bash
# Clone the repo (already done)
cd native-image-modals

# Install pnpm if you don't have it
npm i -g pnpm

# Install dependencies
pnpm install

# Run the app on Expo Go (or a simulator)
pnpm expo start   # or `expo start`
```

The default screen shows a small gallery of placeholder images. Tap an image to open the modal.

## Project Structure

```
src/
  components/
    ImageModal.tsx      # modal component
    ImageList.tsx       # flat list grid component
  screens/
    ImageGalleryScreen.tsx  # screen that uses the components
App.tsx               # renders ImageGalleryScreen
```

## Scripts

- `expo start` – start the Expo development server.
- `expo run:android` / `expo run:ios` – run on a device or emulator.

## Testing

The repo includes testing dependencies (`@testing-library/react-native`). Add unit tests under `__tests__/` and run:

```bash
pnpm test
```

## Contributing

1. Fork the repository.
2. Create a feature branch.
3. Make your changes respecting DRY/KISS.
4. Ensure `pnpm test` passes and coverage > 80 %.
5. Open a Pull Request.

## License

MIT © Twarimswe
