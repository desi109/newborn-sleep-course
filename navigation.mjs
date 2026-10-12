export function lessonForHash(course, hash) {
  const id = new URLSearchParams(hash.replace(/^#/, '')).get('lesson');
  return course.modules.flatMap(m => m.lessons).find(l => l.id === id) || null;
}
export function neighbors(course, id) {
  const all = course.modules.flatMap(m => m.lessons), index = all.findIndex(l => l.id === id);
  return {previous: all[index - 1] || null, next: all[index + 1] || null};
}
export function assetURL(path, base) {return new URL(path, base).href;}
