# @TagnumElite/Svelte-ChartJS

Svelte wrapper components for [chart.js]

## Installation

```bash
npm i chart.js @tagnumelite/svelte-chartjs
```

## Usage

```svelte
<script>
    import { Bar } from '@tagnumelite/svelte-chartjs';

    const chartData = {
        dataset: [...]
    };
</script>

<Bar data={chartData} />
```

## Example

## Contributing

I made this in contrast to [svelte-chartjs] because I wanted make a website using [Svelte] 5.

### Getting Started

```bash
git clone https://github.com/TagnunmElite/tagnumelite-svelte-chartjs
cd tagnumelite-svelte-chartjs
npm install
npm run dev
```

### Running Tests

```bash
npm test
```

### [Storybook]()

```bash
npm run storybook
```

## License

This project is licensed under the [MIT License](https://github.com/TagnumElite/tagnumelite-svelte-chartjs/blob/master/LICENSE)

[Svelte]: https://svelte.dev
[svelte-chartjs]: https://github.com/SauravKanchan/svelte-chartjs
[chart.js]: https://www.chartjs.org