import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Editor from './editor';
import { DailyScrumAttrs, useCreateScrumMutation } from './queries';
import { Themes } from './theme';

export default () => {
  const scrum: DailyScrumAttrs = {
    meetingInfo: {
      title: '',
      lengthInMinutes: 5,
      theme: Themes.Oxblood,
    },
    attendees: [],
  };
  const navigate = useNavigate();
  const { mutateAsync: create } = useCreateScrumMutation();
  const [saving, setSaving] = useState<boolean>(false);

  return (
    <Editor
      saving={saving}
      onUpdate={(attrs) => {
        setSaving(true);
        create(attrs)
          .then(({ id }) => {
            setSaving(false);
            return id;
          })
          .then((id) => navigate(`/scrums/${id}`, { replace: true }));
      }}
      {...scrum}
    />
  );
};
