from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("blog", "0002_blogpost_created_by_blogpost_updated_by_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="blogpost",
            name="cover_image",
            field=models.CharField(
                blank=True,
                help_text="Frontend static image path, for example blog/cover.png or cover.png.",
                max_length=255,
            ),
        ),
    ]
