import type { CollectionEntry } from 'astro:content';

export type Talk = CollectionEntry<'talks'>['data'];

export type GroupedTalks = {
	upcoming: Record<string, Talk[]>;
	past: Record<string, Talk[]>;
};

export function groupTalksByYear(talks: Talk[]): GroupedTalks {
	const today = new Date().toISOString().slice(0, 10);
	const groups: GroupedTalks = { upcoming: {}, past: {} };

	for (const talk of talks) {
		const year = talk.eventDate.slice(0, 4);
		const target = talk.eventDate >= today ? groups.upcoming : groups.past;
		(target[year] ??= []).push(talk);
	}

	const sortByDate = (
		bucket: Record<string, Talk[]>,
		descending: boolean,
	): void => {
		for (const year in bucket) {
			bucket[year].sort((a, b) =>
				descending
					? b.eventDate.localeCompare(a.eventDate)
					: a.eventDate.localeCompare(b.eventDate),
			);
		}
	};

	sortByDate(groups.upcoming, false);
	sortByDate(groups.past, true);
	return groups;
}
