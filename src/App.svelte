<script lang="ts">
	export let version: string;
  let name = "World";
  let test = process.versions.electron;
</script>

<style>
	h1  {
		color: purple;
	}
</style>

<h1>Hello <span>{name}</span>!</h1>
<button class="ui primary button">
  Save
</button>
<button class="ui button">
  Discard
</button>
<p>We are using Node.js version {process.versions.node},</p>
<p>Chromium version {process.versions.chrome}</p>
<p>and Electron version {process.versions.electron}.</p>
<p>But most importantly <strong>Svelte</strong> version {version}!</p>