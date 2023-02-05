'use client';

export default function Error({ error }) {
  return (
    <div>
      OI OI OI...... something went wrong.. Try again..
      <p>{error.message}</p>
    </div>
  );
}
