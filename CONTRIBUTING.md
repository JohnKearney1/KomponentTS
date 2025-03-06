# Contributing to KomponentTS

We’re thrilled that you’re interested in contributing to **KomponentTS** – a modern, TypeScript React component library. Whether you’re fixing a bug, adding a feature, or improving documentation, your help is welcome!

## Table of Contents

- [How to Contribute](#how-to-contribute)
- [Reporting Issues](#reporting-issues)
- [Suggesting Enhancements](#suggesting-enhancements)
- [Pull Requests](#pull-requests)
- [Code Style and Guidelines](#code-style-and-guidelines)
- [License](#license)

## How to Contribute

There are several ways you can contribute to KomponentTS:
- **Bug Reports:** If you discover a bug, please file an issue with detailed information.
- **Feature Requests:** Have an idea for a new component or improvement? Let us know via GitHub issues.
- **Code Contributions:** Fork the repository, make your changes, and submit a pull request.
- **Documentation:** Clear documentation makes it easier for others to use and contribute to our library.
- **Testing:** Write tests and help us improve our test coverage.

## Reporting Issues

Before opening a new issue, please:
- Search existing issues to ensure your problem hasn’t already been reported.
- Provide a clear, descriptive title and details on how to reproduce the problem.
- Include screenshots or logs if applicable.
- Use the [issue template](.github/ISSUE_TEMPLATE.md) if available.

## Suggesting Enhancements

We welcome your ideas for improving KomponentTS! When suggesting an enhancement:
- Clearly describe the idea and its benefits.
- If applicable, outline how the enhancement might be implemented.
- Use the [enhancement template](.github/ISSUE_TEMPLATE.md) to submit your suggestion.

## Pull Requests

Before submitting a pull request:
- **Fork the repository** and create a branch for your changes.
- Ensure your code follows our [code style guidelines](#code-style-and-guidelines).
- Write clear commit messages that describe your changes.
- Test your changes thoroughly.
- Reference any related issues in your pull request.
- If your changes include new functionality, consider updating documentation and adding tests.

We review pull requests regularly and strive to merge changes that improve the project while maintaining high quality.

## Code Style and Guidelines

To maintain consistency and readability across the project:
- **Language:** Utilize TypeScript `ts` or `tsx` where appropriate. Avoid hacky JavaScript solutions, and keep clear type definitions.
- **Naming:** Use descriptive names for variables, functions, and components.
- **Component Structure:** Follow the established structure for React components.
- **Tests:** Write unit tests for new features or bug fixes if you are unable.
- **Icons:** This project uses Radix Icons for its iconography. For now, radix icons are installed as a package.
- **Styling:** Use CSS for styling components. Avoid inline styles and use utility classes where possible. Use global styles and create variables for colors, spacing, etc. in the `index.css` file. This project uses a ThemeProvider to provide global styles and theme variables to components.
- **Storybook Support**: If you are adding a new component, please add a story to the Storybook. This will help us visualize the component and its variations.
- **Commit Messages:** Write clear, descriptive commit messages that explain the changes you are making.


If you’re unsure about any style or guideline, submit a PR and we’ll help you out!

## License
By contributing, you agree that your contributions will be licensed under the project's [ISC License](LICENSE).

---

Thank you for contributing to KomponentTS! 🎉