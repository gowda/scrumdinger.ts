import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import LoadingMessage from '../components/loading-message';
import ErrorMessage from '../components/error-message';
import Component from './component';

import { useScrum, useUpdateScrumMutation } from '../queries';

export default () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading, isError, error, isSuccess, data: scrum } = useScrum(id);
  const { mutateAsync: update } = useUpdateScrumMutation(id);
  const [saving, setSaving] = useState<boolean>(false);

  return (
    <>
      {isLoading && <LoadingMessage />}
      {isError && error && <ErrorMessage message={error.message} />}
      {isSuccess && scrum && (
        <Component
          saving={saving}
          onUpdate={(attrs) => {
            setSaving(true);
            update(attrs)
              .then(() => setSaving(false))
              .then(() => navigate(`/scrums/${id}`, { replace: true }));
          }}
          {...scrum}
        />
      )}
    </>
  );
};
