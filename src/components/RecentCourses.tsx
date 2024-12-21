const RECENT_COURSES = [
  {
    id: 1,
    title: 'Habits in the present',
    type: 'Session',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad',
    timeAgo: '2 week ago',
  },
  // Add more courses as needed
];

export function RecentCourses() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {RECENT_COURSES.map((course) => (
        <div
          key={course.id}
          className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-medium mb-1">{course.title}</h3>
            <div className="flex justify-between text-sm text-gray-500">
              <span>{course.type}</span>
              <span>{course.timeAgo}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}