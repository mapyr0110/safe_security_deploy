from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("catalog", "0004_product_documentation_en_product_documentation_kk_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="productimage",
            name="image",
            field=models.CharField(
                help_text="Frontend static image path, for example products/ipcam1.jpeg or ipcam1.jpeg.",
                max_length=255,
            ),
        ),
    ]
