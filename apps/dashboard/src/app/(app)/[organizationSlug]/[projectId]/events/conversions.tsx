'use client';

import { EventsTable } from '@/components/events/table';
import { api } from '@/trpc/client';

type Props = {
  projectId: string;
  profileId?: string;
};

const Conversions = ({ projectId }: Props) => {
  const query = api.event.conversions.useInfiniteQuery(
    {
      projectId,
    },
    {
      getNextPageParam: (lastPage) => lastPage.meta.next,
      keepPreviousData: true,
    },
  );

  return <EventsTable query={query} />;
};

export default Conversions;
